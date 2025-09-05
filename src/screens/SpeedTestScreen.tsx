import { Button, Col, Flex, Input, Layout, List, Row, theme, Typography } from "antd"
import React, { useState } from 'react'
import InputButton from "./InputButton";
import { PlusCircleOutlined } from "@ant-design/icons";


const SpeedTestScreen = () => {
    const { Title, Text, Paragraph } = Typography;
    const { token } = theme.useToken();
    const [rpcs, setRpcs] = useState([]);

    const handleStartTest = () => {

    }

    return (
        <Layout
            style={{
                backgroundColor: token.colorBgContainer,
                textAlign: "center",
            }}
        >
            <Title level={3}>Start Testing Your RPC Speed！</Title>
            <Paragraph>Free RPC speed test - 100% Free</Paragraph>

            <Row justify="center" style={{ marginTop: 50 }}>
                <Col lg={10} xs={22}>
                    <Flex vertical justify="start" align="start" gap={10}>
                        <InputButton
                            inputProps={{
                                placeholder: "Please input RPC endpoint..."
                            }}
                            buttonProps={{
                                children: "Start"
                            }}
                        />
                        <Button
                            icon={<PlusCircleOutlined />}
                            variant="link"
                            color="primary"
                            style={{ padding: 0 }}
                        >
                            Add other RPC
                        </Button>
                    </Flex>
                </Col>

                {/* <Col span={24} style={{ marginTop: 50 }}>
                    <List />
                </Col> */}
            </Row>
        </Layout>
    )
}

export default SpeedTestScreen