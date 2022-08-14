```
import CloseIcon from "@images/icons/close.svg";
```

```
const { kyc, saveKyc } = useContext(KycContext);

  return (
    <Layout>
      <p className="text-hero"> {kyc.username} </p>
      <button
        onClick={() =>
          saveKyc({
            username: "gg",
          })
        }
      >
        Click here
      </button>
      <Link to="kyc/onboarding">Take me to another page</Link>
      <img src={CloseIcon} width="40px" height="40px"></img>
    </Layout>
  );
```
