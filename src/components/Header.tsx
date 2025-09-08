import { Avatar, Button, Col, Flex, Layout, Space, theme, Typography, type ButtonProps } from "antd"
import React from 'react'
import { GithubFilled } from "@ant-design/icons";

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
            <Flex gap={10} justify="center" align="center">
                <Avatar
                    size="large"
                    shape="square"
                    src={"/solana.png"}
                />

                <Col xs={0} lg={20}>
                    <Text strong style={{ fontSize: 22 }} >Solana RPC Speed Test</Text>
                </Col>
            </Flex>

            <Space>
                <HeaderButton icon={<GithubFilled />}>Github</HeaderButton>
            </Space>
        </Layout.Header>
    )
}

export default Header