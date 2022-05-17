import React from 'react'
import { Button, TextBox } from 'devextreme-react';
import { useForm } from '../hooks/useForm';
import './FormStyle.css';

interface ILoginData {
  email: string;
  password: string;
}
// import './index.css';


export const TestLogin = () => {

  const { onChange, email, password, formData  } = useForm({} as ILoginData);

  return (
    <div style={{ height: '96vh', backgroundImage: 'url(/images/fondo_1.jpg)', backgroundSize: 'cover' }} >

        {/* <img src={process.env.PUBLIC_URL + '/images/fondo_1.jpg'} alt="logo" /> */}
        <div className='boxLogin'>
              <div className='boxLoginTitulo'>hola</div>
          <form style={{ position: 'relative' }}>
            <div className="dx-fieldset">

              <div className="dx-field">

                <TextBox placeholder="Enter full name here..." />
              </div>
              <div className="dx-field">
                <Button
                      text="Login"
                  />
                </div>
            </div>
          </form>
        </div>
    </div>
  );

};
