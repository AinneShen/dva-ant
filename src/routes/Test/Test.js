import React from 'react'
import { connect } from 'dva'
import { Form, Input, Icon, Select, Button, Upload, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isImg = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isImg) {
    message.error('只能上传png或者jpg格式的图片');
  }
  const isLt300k = file.size / 1024  < 300;
  if (!isLt300k) {
    message.error('图片大小不能超过300K');
  }
  return isImg && isLt300k;
}


class RegistrationForm extends React.Component {
  state = {
    loading: false
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleChange = (info) => {
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl
      }));
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, imageUrl => this.setState({
    //     imageUrl,
    //     loading: false,
    //   }));
    // }
  }
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
        md: { span: 8 }
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">添加图片</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    const categoryList = [{id:1,category:"美容"},{id:2,category:"美发"}];
    return (
      <div style={{background: '#fff'}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="名称"
          >
            {getFieldDecorator('name', {
              rules: [{
                required: true, message: '请输入名称',
              }],
            })(
              <Input maxLength="30"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="人员分类"
          >
            {getFieldDecorator('category', {
              rules: [{
                required: true, message: '请选择类别',
              }],
            })(
              <Select>
                {
                  categoryList.map((item) => {
                    return <Option key={item.id} value={item.id}>{item.category}</Option>
                  })
                }
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="头像"
            extra="图片大小不超过300K，推荐尺寸300*300"
          >
            {getFieldDecorator('headImg', {
              rules: [{
                required: true, message: '请上传头像',
              }],
            })(
              <div>
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img style={{width: 100,height: 100}} src={imageUrl} alt="" /> : uploadButton}
                </Upload>
              </div>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="职称"
          >
            {getFieldDecorator('jobTitle')(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="工作年限"
          >
            {getFieldDecorator('workingYears')(
              <Input type="number" placeholder="单位：年" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="排序"
          >
            {getFieldDecorator('position')(
              <Input type="number" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="简介"
          >
            {getFieldDecorator('brief')(
              <TextArea  autosize={{ minRows: 3, maxRows: 6 }} maxLength={200}/>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
};

export default connect(mapStateToProps)(Form.create()(RegistrationForm));
