import { Flex, Layout, Space, Typography } from "antd"
import React from 'react'

const Footer = () => {
    const { Text, Link } = Typography;

    return (
        <Layout.Footer
            style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 60,
                display: "flex",
                justifyContent: "end",
                alignItems: "center"
            }}
        >
            <div>
                <Text style={{ marginRight: 10 }}>☕ Buy me a coffee:</Text>
                <Link ellipsis copyable>G1AQFr3f1ExDjEEC8Y1W4QmSQ5svn81pkdzE1SV7T3Tt</Link>
            </div>
        </Layout.Footer>
    )
}

export default Footer