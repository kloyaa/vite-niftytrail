import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from "@chakra-ui/react"

interface IAlertProps {
  isOpen: boolean;
  message: string;
  title: string;
}
export const AlertComponent = ({ isOpen, message, title }: IAlertProps) => {
    const { onClose } = useDisclosure()
    return  <>
    <Modal isOpen={isOpen} onClose={onClose} size={"md"} isCentered>
      <ModalOverlay />
      <ModalContent p={"20"}>
        {/* <ModalHeader>{title}</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={"md"}>{message}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>
}