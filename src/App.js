import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Space, Typography } from 'antd';
import { Divider } from 'antd';
import { Col, Row } from 'antd';
import { Affix } from 'antd';
import { useState } from 'react';
const { Text, Link } = Typography;


function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Text mark>Ant Design (secondary)</Text>
      <Divider dashed/>
      <Row justify='start'>
        <Col span={12}>col-12</Col>
      </Row>
      <Divider orientation="start">Divider start</Divider>
      <Row justify='end'>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Divider orientation="end">Divider End</Divider>
      <Row justify='center'>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider orientation="center">Divider center</Divider>
      <Row justify='space-evenly'>
        <Col span={3}>col-3</Col>
        <Col span={3}>col-3</Col>
        <Col span={3}>col-3</Col>
        <Col span={3}>col-3</Col>
      </Row>
      <Divider/>
      <Row justify='space-between'>
        <Col span={4}>col-4</Col>
        <Col span={2}>col-2</Col>
        <Col span={3}>col-3</Col>
        <Col span={1}>col-1</Col>
        <Col span={2}>col-2</Col>
      </Row>
      <Divider/>
      <Row justify='space-around'>
        <Col span={4}>col-4</Col>
        <Col span={2}>col-2</Col>
        <Col span={3}>col-3</Col>
        <Col span={1}>col-1</Col>
        <Col span={2}>col-2</Col>
      </Row>
      <Divider/>
    </div>
  );
}

export default App;
