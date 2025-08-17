'use client';

import { FC, ReactNode } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props{
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode
}

const Modal:FC<Props> = ({isOpen, onClose, children}) => {

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={onClose} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-lg space-y-4 bg-black py-12 px-6 text-dark"
              >
                <div className="w-full"> {children} </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modal;