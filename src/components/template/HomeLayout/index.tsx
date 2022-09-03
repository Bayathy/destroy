import React from 'react'
import { Modal, Portal } from '../../molecules/Modal'
import { Header, HeaderProparty } from '../../organisms/Header'
import { ModalPostform } from '../../organisms/ModalPostform'

export type HomeLayout = {
   children: React.ReactNode
   isModalOpen: boolean
} & HeaderProparty

export const HomeLayout: React.FC<HomeLayout> = ({
   children,
   isModalOpen,
   Headertitle,
   leftButton,
   rightButton
}) => {
   return (
      <>
         <Header
            Headertitle={Headertitle}
            leftButton={leftButton}
            rightButton={rightButton}
         />
         <main id="root">
            {isModalOpen && (
               <Portal>
                  <Modal>
                     <ModalPostform />
                  </Modal>
               </Portal>
            )}
            {children}
         </main>
      </>
   )
}
