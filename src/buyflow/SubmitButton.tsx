import React from "react";

interface SubmitButtonProps {
    id: string,
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => (
    <button type='submit' id={props.id}>
        Next
    </button>
)

export default SubmitButton;
