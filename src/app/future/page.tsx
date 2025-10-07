import EmailForm from "@/components/EmailForms";

const FuturePage = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] 
        items-center justify-center
        bg-gray-200"
    >
      <h1 className="text-3xl fold-semibold text-center">Online Purchaes Coming Soon!!</h1>
      <h2>Injecting now</h2>
      <h2>Contact thedude@cliffbait.com</h2>
      {/* <EmailForm /> */}
    </div>
  )
}

export default FuturePage;