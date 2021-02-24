import React from "react";
import { Row, Col, Slider as SliderUI, InputNumber } from 'antd'

export const Slider = ({ value, formatter, min, max, step, onChange, marks }) => (
  <Row style={{ marginBottom: "48px" }}>
    <Col span={18}>
      <SliderUI
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        tipFormatter={formatter}
        marks={marks}
        value={value}
      />
    </Col>
    <Col span={4} offset={2}>
      <InputNumber
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        formatter={formatter}
        value={value}
      />
    </Col>
  </Row>
);
