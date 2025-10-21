import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { orders } from "@wix/ecom";
import Link from "next/link";

const OrderPage = async ({params}:any) => {
  const pageParams = await params;
  const wixClient = await wixClientServer();
  const orderId = pageParams.id;

  let order;
  try {
    order = await wixClient.orders.getOrder(orderId) as orders.Order;
  }catch(e){
    console.error('order not found', e)
    return notFound();
  }

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center">
      <h1 className="text-3xl">Order Details</h1>
      <div className="mt-12 flex flex-col gap-6">
        <div className="">
          <span className="font-medium">Order ID: </span>
          <span>{order._id}</span>
        </div>
        <div className="">
          <span className="font-medium">Order Number: </span>
          <span>{order.number}</span>
        </div>
        <div className="">
          <span className="font-medium">Receiver Name: </span>
          <span>{order.billingInfo?.contactDetails?.firstName} {order.billingInfo?.contactDetails?.lastName}</span>
        </div>
        <div className="">
          <span className="font-medium">Receiver Email: </span>
          <span>{order.buyerInfo?.email}</span>
        </div>
        <div className="">
          <span className="font-medium">Price: </span>
          <span>{order.priceSummary?.subtotal?.amount}</span>
        </div>
        <div className="">
          <span className="font-medium">Payment Status: </span>
          <span>{order.paymentStatus}</span>
        </div>
        <div className="">
          <span className="font-medium">Order Status: </span>
          <span>{order.status}</span>
        </div>
        <div className="">
          <span className="font-medium">Delivery Address: </span>
          <span>
            {order.shippingInfo?.logistics?.shippingDestination?.address?.addressLine1 + " "}
            {order.shippingInfo?.logistics?.shippingDestination?.address?.city + " "}
            {order.shippingInfo?.logistics?.shippingDestination?.address?.postalCode }
          </span>
        </div>
      </div>
      <Link href="/" className="underline mt-6">Have a problem? Contact us</Link>
    </div>
  )
};

export default OrderPage;