import { Form, FormInstance } from "houseform";
import React, { ReactElement } from "react";
import { ListContext } from "./Provider";

export const ListForm = ({ children }: React.PropsWithChildren) => {
    const { setFilters } = React.useContext(ListContext);
    const formRef = React.useRef<FormInstance<Record<string, unknown>> | null>(null);

    return (
        <Form ref={formRef} >
            {({ }) => {
                return (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}

                        className="w-full flex"
                    >
                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return React.cloneElement(child as ReactElement<Record<string, unknown>>, {
                                    handleChange: setFilters,
                                });
                            }
                            return child;
                        })}
                    </form>
                )
            }}
        </Form>
    )
}
