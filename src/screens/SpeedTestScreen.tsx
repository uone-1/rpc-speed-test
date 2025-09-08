import { Button, Col, Flex, Input, Layout, List, Row, Space, Table, theme, Typography, type ButtonProps } from "antd"
import React, { useState } from 'react'
import InputButton from "./InputButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Connection } from "@solana/web3.js";
import { PulseLoader } from "react-spinners";


const SpeedTestScreen = () => {
    const { Title, Text, Paragraph } = Typography;
    const { token } = theme.useToken();
    const [rpcEndpoints, setRpcEndpoints] = useState(["https://solana-rpc.publicnode.com"]);
    const [pings, setPings] = useState<number[]>([]);

    const handleStartTest = async () => {
        setPings(rpcEndpoints.map(e => e.length == 0 ? -2 : -1));
        const rpcs = rpcEndpoints.map(endpoint => endpoint.length == 0 ? null : new Connection(endpoint));
        const testTasks = rpcs.map(async (rpc, idx) => {
            try {
                if (!rpc) throw Error();
                const startTime = Date.now();
                await rpc.getLatestBlockhash();
                const ping = Date.now() - startTime;
                updatePing(idx, ping);
            } catch {
                updatePing(idx, -2);
            }
        });
        await Promise.all(testTasks);
    }

    const getButtonProps = (idx: number): ButtonProps => {
        if (idx == 0)
            return {
                children: "Start",
                onClick: handleStartTest
            }

        return {
            children: "Delete",
            variant: "link",
            color: "danger",
            onClick: () => handleDeleteRPCEndpoint(idx),
        };
    }

    // undefined = error
    // -1        = loading
    // -2        = normal
    const updatePing = (idx: number, ping: number) => {
        setPings(prev => prev.map((e, _idx) => _idx == idx ? ping : e));
    }

    const handleAddRPCEndpoint = () => {
        setPings([]);
        return setRpcEndpoints(prev => [...prev, ""]);
    }

    const handleDeleteRPCEndpoint = (idx: number) => {
        return setRpcEndpoints(rpcEndpoints.filter((_, _idx) => _idx != idx));
    }

    const handleUpdateRPCEndpoint = (idx: number, endpoint: string) => {
        return setRpcEndpoints(prev => prev.map((e, _idx) => _idx == idx ? endpoint : e));
    }

    const getPingColor = (ping: number) => {
        if (ping < 1500)
            return "limegreen";
        return "red";
    }

    const renderPing = (idx: number) => {
        const ping = pings[idx];
        if (ping == -1)
            return <PulseLoader
                size={4}
                speedMultiplier={0.7}
            />;
        else if (ping == -2)
            return <Text type="danger">Error</Text>;
        else if (ping > 0)
            return <Text italic style={{ color: getPingColor(ping) }}>{ping} ms</Text>
        return null;
    }

    return (
        <Layout
            style={{
                backgroundColor: token.colorBgContainer,
                textAlign: "center",
            }}
        >
            <Title level={3}>Start Testing Your RPC Speed！</Title>
            <Paragraph>Free Solana RPC speed test</Paragraph>

            <Row justify="center" style={{ marginTop: 50 }}>
                <Col lg={10} xs={22}>
                    <Flex
                        vertical
                        justify="start"
                        align="start"
                        gap={10}
                    >
                        {
                            rpcEndpoints.map((endpoint, idx) =>
                                <Flex
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Space style={{ width: 60, textAlign: "start" }}>
                                        {renderPing(idx)}
                                    </Space>
                                    <InputButton
                                        inputProps={{
                                            value: endpoint,
                                            placeholder: "Please input RPC endpoint...",
                                            onChange: (e) => handleUpdateRPCEndpoint(idx, e.target.value),
                                        }}
                                        buttonProps={getButtonProps(idx)}
                                    />
                                </Flex>
                            )
                        }
                        <Button
                            icon={<PlusCircleOutlined />}
                            variant="link"
                            color="primary"
                            style={{ padding: 0 }}
                            onClick={handleAddRPCEndpoint}
                            disabled={rpcEndpoints.length == 5}
                        >
                            Add More RPC
                        </Button>
                    </Flex>
                </Col>
            </Row>
        </Layout>
    )
}

export default SpeedTestScreen