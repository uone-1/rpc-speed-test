import { Button, Flex, Input, type ButtonProps, type InputProps } from "antd"
import React from 'react'

const InputButton = ({ inputProps, buttonProps }: { inputProps?: InputProps, buttonProps?: ButtonProps }) => {
    return (
        <Flex
            style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Input
                style={{
                    width: "100%",
                    height: 46,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                }}
                {...inputProps}
            />
            <Button
                type="primary"
                style={{
                    width: 90,
                    height: 46,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                }}
                {...buttonProps}
            >
                {buttonProps?.children ?? "OK"}
            </Button>
        </Flex>
    )
}

export default InputButton