import { Helmet } from '@modern-js/runtime/head';
import Login from './_components/Login';
import './index.css';

const Index = () => (
  <div className="container mx-auto">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <Login />
    </main>
  </div>
);

export default Index;
