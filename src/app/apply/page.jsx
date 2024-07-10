import dynamic from "next/dynamic";
import Head from "next/head";
const ApplyformComp = dynamic(() => import("../Components/Applyform"));

const ApplyForm = ({ handleClose }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={"https://collegecounsel.co.in/apply"} />
        <title>Apply for free counseling - College Counsel</title>
      </Head>
      <div className="w-full fixed top-0 left-0 z-10 h-full flex items-center justify-center">
        <ApplyformComp handleClose={handleClose} />
      </div>
    </>
  );
};

export default ApplyForm;
