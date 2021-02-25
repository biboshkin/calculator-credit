import { Divider, Card, Row, Col, Tooltip, message, Typography } from "antd";
import { chain } from 'mathjs'
import { DollarCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Slider } from "../slider";
import React, { useEffect, useState } from "react";
import { TotalCell } from "../total-cell";

export const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [period, setPeriod] = useState(3);
  const [payment, setPayment] = useState(0);

  const rate = 9;


  useEffect(() => {
    try {
      // const ratePerMonth = chain(rate).divide(12).divide(100).done() корректная формула
      const ratePerMonth = chain(rate).divide(100).done()
      const rateKoef = chain(ratePerMonth).add(1).pow(period).done()
      const res = chain(amount).multiply(ratePerMonth).multiply(rateKoef).divide(chain(rateKoef).subtract(1).done()).round(0).done()
      if (!isNaN(res)) {
        setPayment(res)
      }
    } catch (error) {
      message.error('Произошла ошибка')
    }
  }, [amount, period])

  const marksAmount = {
    0: "10 000 руб",
    300000: {
      style: {
        width: "100px",
      },
      label: "300 000 руб",
    },
  };

  const marksPeriod = {
    0: "1 мес",
    36: {
      style: {
        width: "100px",
      },
      label: "3 года",
    },
  };

  const tipFormatterAmount = (number) => {
    try {
      return new Intl.NumberFormat("ru-RU").format(number);
    } catch (error) {
      message.error('Произошла ошибка')
    }
  };

  const tipFormatterPeriod = (number) => {
    try {
      return `${number} мес`;      
    } catch (error) {
      message.error('Произошла ошибка')      
    }
  };

  const amountParams = {
    min: 10000,
    max: 300000,
    step: 10000,
    onChange: (value) => {
      setAmount(value);
    },
    value: amount,
    formatter: tipFormatterAmount,
    marks: marksAmount,
  };

  const periodParams = {
    min: 3,
    max: 36,
    step: 1,
    onChange: (value) => {
      setPeriod(value);
    },
    value: period,
    formatter: tipFormatterPeriod,
    marks: marksPeriod,
  };

  return (
    <div style={{ margin: "100px 0" }}>
      <Divider orientation="left">Выберите сумму кредита</Divider>
      <Slider {...amountParams} />

      <Typography.Title style={{ marginLeft: '24px' }} level={5}>
        Выберите срок кредита
      </Typography.Title>
      <Slider {...periodParams} />

      <Card
        title={
          <>
            <DollarCircleOutlined
              style={{ fontSize: "20px", marginRight: "8px" }}
            />
            <span>Информация о кредите</span>
            <Tooltip title="Окончательные условья будут известны после оформления заявки">
                <InfoCircleOutlined style={{ float: 'right', marginTop: '6px' }} />
            </Tooltip>
          </>
        }
      >
        <Row gutter={[0, 24]}>
          <Col span={12}>
            <TotalCell
              value={`${tipFormatterAmount(amount)} руб`}
              title="Сумма"
            />
          </Col>
          <Col span={12}>
            <TotalCell value={tipFormatterPeriod(period)} title="Срок" />
          </Col>
          <Col span={12}>
            <TotalCell
              value={`${rate} %`}
              title="Ставка"
            />
          </Col>
          <Col span={12}>
            <TotalCell
              value={`${tipFormatterAmount(payment)} руб`}
              title="Платеж в месяц"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
