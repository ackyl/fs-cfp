### KYC Steps

1. Documents
2. Email & Phone Number
3. Personal Data
4. Occupation
5. Source of Fund
6. Bank Account
7. Pegadaian Location
8. ### Review Application

```
Senin
1. documents
2. contact

Selasa
3. personal
4. occupation

Rabu
5. fund
6. bank

Kamis
7. pegadaian

Jumat
8. review
```

### Default Class Import

```
// Main Imports
import React, { useContext } from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import
import ThumbnailImage from "@images/photoThumbnail.png";

// Main Render
const Document = () => {
  const { context, saveContext } = useContext(GlobalContext);

  return (
    <Layout>
      {/* NavBar */}
      <NavBar isNotice={true} isBack={true} backUrl="../../verify-ktp">
        Verify Your Identity
      </NavBar>

      {/* Content */}
    </Layout>
  );
};

export default Document;
```

### Using and Saving Global Context

```
const { kyc, saveKyc } = useContext(GlobalContext);

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
