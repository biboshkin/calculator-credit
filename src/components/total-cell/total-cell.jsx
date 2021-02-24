import React from "react";
import { Typography } from 'antd'

export const TotalCell = ({ title, value }) => (
  <>
    <Typography.Title type="secondary" level={5}>{title}</Typography.Title>
    <Typography.Title level={5}>{value}</Typography.Title>
  </>
);
