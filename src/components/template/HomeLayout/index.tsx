import React from 'react'
import { Modal, Portal } from '../../molecules/Modal'
import { Header, HeaderProparty } from '../../organisms/Header'
import { ModalPostform, PostformProparty } from '../../organisms/ModalPostform'

export type HomeLayout = {
   children: React.ReactNode
   isModalOpen: boolean
} & HeaderProparty &
   PostformProparty

export const HomeLayout: React.FC<HomeLayout> = ({
   children,
   isModalOpen,
   Headertitle,
   leftButton,
   rightButton,
   closeAction,
   isHomeLayout
}) => {
   return (
      <>
         <Header
            Headertitle={Headertitle}
            leftButton={leftButton}
            rightButton={rightButton}
            isHomeLayout={isHomeLayout}
         />
         <main id="root">
            {isModalOpen && (
               <Portal>
                  <Modal>
                     <ModalPostform closeAction={closeAction} />
                  </Modal>
               </Portal>
            )}
            {children}
         </main>
      </>
   )
}
