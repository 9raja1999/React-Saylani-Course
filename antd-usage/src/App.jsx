import { useState } from 'react'
import {
  Button,
  Input,
  ConfigProvider
} from 'antd'
import {
  UserOutlined
} from '@ant-design/icons'

import './App.css'

function App() {
  const [disable, setDisable] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => setLoading(true)


  return (
    <>

      <ConfigProvider
        theme={{
          components: {
            Button: {
              borderColorDisabled: 'red',
              defaultBg: 'green'
            },
            Input : {
              activeBg : 'red',
              hoverBg : 'green'
            }
          }
        }}
      >


        <Input
          prefix={<UserOutlined />}
          placeholder='name'
        />
        <Button
          onClick={() => setDisable(prev => !prev)}
        >
          Make Btn Disable
        </Button>
        <Button type='primary' disabled
          onClick={() => setDisable(prev => !prev)}
          className='disabledBtn'
        >
          Make Btn Disable
        </Button></ConfigProvider>
    </>
  )
}

export default App
