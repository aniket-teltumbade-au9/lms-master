import { Form, FormInstance } from "houseform";
import React, { ReactElement } from "react";
import { ListContext } from "./Provider";

interface Props extends React.PropsWithChildren {
    submit?: () => void
}
export const ListForm = ({ children, submit }: Props) => {
    const { setFilters } = React.useContext(ListContext);
    const formRef = React.useRef<FormInstance<Record<string, unknown>> | null>(null);

    return (
        <Form ref={formRef} onSubmit={submit} >
            {({ reset }) => {
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
                                    reset
                                });
                            }
                            return child;
                        })}
                        {submit && <button
                            className="bg-[#f7f7f7] border border-[#f7f7f7] px-4 py-2 rounded-lg"
                            type="submit">Submit</button>}
                    </form>
                )
            }}
        </Form>
    )
}
