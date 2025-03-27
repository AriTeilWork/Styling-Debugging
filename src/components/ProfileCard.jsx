import React from 'react';
import styled from 'styled-components';
export default function ProfileCard() {
    const Card = styled.div`
        width: 300px;
        background-color: #f5f5f5;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        padding: 20px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    const Avatar = styled.img`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 16px auto;
    `;

    const Name = styled.h2`
        margin: 10px 0;
        color: #000;
        font-weight: bold;
        font-size: 20px;
    `;

    const Description = styled.p`
        margin: 10px 0;
        color: #666;
        font-size: 14px;
    `;

    const Button = styled.button`
        margin-top: 20px;
        cursor: pointer;
        border: none;
        padding: 10px;
        border-radius: 4px;
        width: 120px;
        color: #fff;
        background-color: #1976d2;
        &:hover {
            background-color: #155a9c;
        }
    `;

    return (
        <Card>
            <Avatar src="https://via.placeholder.com/100" alt="avatar" />
            <Name>Matti Meikäläinen</Name>
            <Description>Full-stack developer, passionate about coding and coffee</Description>
            <Button>Contact Me</Button>
        </Card>
    );
}