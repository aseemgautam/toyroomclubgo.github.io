import React, { useState } from 'react';
import { Form, Input, Button, Radio, Row, Col } from 'antd';
import logo from './images/logo.png';
import './App.css';

const LoginForm = props => {

  const [submitted, setSubbmitted] = useState(false);

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setSubbmitted(true);
      }
    });
  }

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
  // Only show error after a field is touched.
  const formItemLayout = {
    labelCol: {
      sm: { span: 24 },
      md: { span: 8 }
    },
    wrapperCol: {
      sm: { span: 24 },
      md: { span: 16 }
    }
  };
  return (
    <div className='container'>
      <div className="header">
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={8} sm={8}><img className="logo" src={logo} alt=""/></Col>
          <Col xs={16} sm={16} className="title">
            Toy Room Verification via ClubGo App
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            Please fill out the details so we can confirm & you can party with Frank.
          </Col>
        </Row>
      </div>
      <br />
      <Row type="flex" justify="space-around" align="middle" className={submitted ? 'success-message' : 'success-message hidden'}>
        <Col span={24}>
          <div>
            Thank you for filling the verification form.
            <br />
            Frank will contact you shortly!
          </div>
        </Col>
      </Row>
      <Form {...formItemLayout} onSubmit={handleSubmit} className={submitted ?'hidden' : ''}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please enter your name.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Mobile">
          {getFieldDecorator('mobile', {
            rules: [
              {
                required: true,
                message: 'Please enter your mobile number.',
              },
            ],
          })(<Input addonBefore={'+91'} />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'Please enter a valid email.',
              },
              {
                required: true,
                message: 'Please enter your e-mail.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator('gender', {
            rules: [
              {
                required: true,
                message: 'Please select your gender.'
              }
            ]
          })(
            <Radio.Group>
              <Radio.Button value="Male">Male</Radio.Button>
              <Radio.Button value="Female">Female</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="No of Couples">
          {getFieldDecorator('couples', {
            rules: [
              {
                required: true,
                message: 'Please select no of couples.'
              }
            ]
          })(
            <Radio.Group>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
              <Radio value="5+">5+</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="No of Females">
          {getFieldDecorator('females', {
            rules: [
              {
                required: true,
                message: 'Please select no of females.'
              }
            ]
          })(
            <Radio.Group>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
              <Radio value="4">4</Radio>
              <Radio value="5">5</Radio>
              <Radio value="5+">5+</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="Day for Party" extra="Frank only parties on Friday & Saturday">
          {getFieldDecorator('day', {
            rules: [
              {
                required: true,
                message: 'Please select day for the party.'
              }
            ]
          })(
            <Radio.Group>
              <Radio.Button value="Friday">Friday</Radio.Button>
              <Radio.Button value="Saturday">Saturday</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>
        <br />
        <Form.Item label="Instagram Profile Link">
          {getFieldDecorator('instagram', {
            rules: [
              {
                type: 'url',
                message: 'Please enter a valid instagram link.',
              },
              {
                required: true,
                message: 'Please enter your instagram url link.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Facebook Profile Link">
          {getFieldDecorator('facebook', {
            rules: [
              {
                type: 'url',
                message: 'Please enter a valid facebook profile link.',
              },
              {
                required: true,
                message: 'Please enter your facebook profile link.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item className="submit">
          <Button type="primary" className="submit-btn" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Submit
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
const App = Form.create({ name: 'horizontal_login' })(LoginForm);
export default App;