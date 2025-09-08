import { Button, Flex, Input, Typography, type ButtonProps, type InputProps } from "antd"
import React from 'react'

const InputButton = ({ inputProps, buttonProps }: { inputProps?: InputProps, buttonProps?: ButtonProps }) => {
    const { Text } = Typography;

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
                    height: 42,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                }}
                {...inputProps}
            />
            <Button
                type="primary"
                style={{
                    width: 90,
                    height: 42,
                    padding: 0,
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