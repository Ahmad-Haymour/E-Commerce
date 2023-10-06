"use client"

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className='p-4'>
        <UserButton afterSignOutUrl="/"/>
        {/* <Modal title="Test" description="Teest Description" isOpen onClose={() => {}}>
            Children
        </Modal> */}
    </div>
  )
}

export default SetupPage;