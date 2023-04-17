import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCustomer, getTokens, setToken } from "@/store/slices/customerInfo";
import { useGetCustomerDetailsMutation } from "@/pages/xCallapi/authenticationApiSlices";
import Cookies from "js-cookie";

export default function HeaderCom(props) {
  const [customer] = useGetCustomerDetailsMutation();

  const dispatch = useDispatch();
  

  useEffect(() => {
    const token = Cookies.get('authToken');
    // dispatch(setToken(token))

    customer(token)
      .unwrap()
      .then((response) => {
        dispatch(getCustomer(response.data));
      });
  }, []);

  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content="DMS Experes Shopping Sit" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/logo.png" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <link href="https://fonts.googleapis.com" />
      <link href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,900&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
        integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
        crossorigin="anonymous"
      ></script>
    </Head>
  );
}
