import { Avatar, Button, Layout, Space, theme, Typography, type ButtonProps } from "antd"
import React from 'react'
import { CloudOutlined, GithubFilled } from "@ant-design/icons";

const Header = () => {
    const { Title, Text } = Typography;
    const { token } = theme.useToken();

    const HeaderButton = (props: ButtonProps) =>
        <Button
            size="large"
            variant="text"
            color="default"
            {...props}
        >
            {props.children}
        </Button>;

    return (
        <Layout.Header
            style={{
                backgroundColor: token.colorBgContainer,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >
            <Space>
                <Avatar
                    size="large"
                    shape="square"
                    icon={<CloudOutlined />}
                    style={{
                        backgroundColor: token.colorPrimary
                    }}
                />
                <Text strong style={{ fontSize: 22 }}>Solana RPC Speed Test</Text>
            </Space>

            <Space>
                <HeaderButton icon={<GithubFilled />}>Github</HeaderButton>
            </Space>
        </Layout.Header>
    )
}

export default Header