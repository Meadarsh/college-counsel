import dynamic from "next/dynamic";
const ApplyformComp = dynamic(()=>import('../Components/Applyform'))

const ApplyForm = ({handleClose}) => {
 
  return (
    <div className='w-full fixed top-0 left-0 z-10 h-full flex items-center justify-center'>
     <ApplyformComp handleClose={handleClose}/>
    </div>
  );
};

export default ApplyForm;

