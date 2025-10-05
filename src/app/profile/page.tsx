import Filter from "@/components/Filter";
import { wixClientServer } from "@/lib/wixClientServer"
import { members } from "@wix/members";
import { orders } from "@wix/ecom";

const ProfilePage = async () => {
  const wixClient = await wixClientServer();
  let user;
  try {
    user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    }) as members.Member;
  }catch (e) {
    console.error('profile page', e);
  }

  console.log('user id', user?._id);

  if (!user ||  user?.contactId!) {
    return <div className="">Not logged in!</div>;
  }

  const orderRes = await wixClient.orders.searchOrders({
    filter: {
      "buyerInfo.contactId": {
        $eq: user?.contactId!
      }
    }
  });

  console.log('orderRes', orderRes);

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center justify-center">
      <div className="w-full md:w-1/2">User</div>
      <div className="w-full md:w-1/2">Orders</div>
    </div>
  )
}

export default ProfilePage;