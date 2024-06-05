import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { RecycleIcon } from "../common/icons";
import ReactNativeModal from "react-native-modal";
import { VStack } from "../common/FlexBox";
import { Text } from "../common/Text";
import Button from "../common/Button";
import { CollectionOrderService } from "../../service";

interface Props {}

const MainIconContainer = styled.TouchableOpacity`
  top: -30px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #000;
`;
const ModalContainer = styled.View`
  border-radius: 16px 16px 0 0;
  background: #fff;
  width: 100%;
  padding: 20px;
  height: 340px;
`;

const MeunSelectionInput = styled.TouchableHighlight`
  border: 1px solid #e1dfdf;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 10px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MaterialList = styled.FlatList`
  border: 1px solid #e1dfdf;
  border-radius: 8px;
  background: #fff;
  width: 100%;
  position: absolute;
  max-height: 160px;
`;

const MenuItem = styled.TouchableOpacity`
  padding: 16px;
`;

type MaterialType = {
  id: string;
  name: string;
  description: string;
};

const Modal = ({
  showModal,
  setshowModal,
}: {
  showModal: boolean;
  setshowModal: (v: boolean) => void;
}) => {
  const {
    onCreateOrder,
    isLoading,
    error,
    data: createdOrder,
  } = CollectionOrderService.createCollectionOrder();
  const [showMatList, setshowMatList] = useState(false);
  const [material, setmaterial] = useState<null | MaterialType>(null);
  const { data } = CollectionOrderService.getTrashMaterial();

  useEffect(() => {
    if (!error) setshowModal(false);
  }, [createdOrder]);

  return (
    <ReactNativeModal
      backdropOpacity={0.3}
      isVisible={showModal}
      onBackdropPress={() => setshowModal(false)}
      style={styles.contentView}
    >
      <ModalContainer>
        <VStack style={{ flex: 1 }} justifyContent="space-between">
          <VStack style={{ zIndex: 99, flex: 1 }} spacing={16}>
            <Text variant="title">Recycle material</Text>
            <VStack style={{ flex: 1 }} spacing={8}>
              <Text variant="body">Material</Text>
              <VStack style={{ flex: 1 }}>
                <MeunSelectionInput
                  underlayColor="transparent"
                  onPress={() => setshowMatList(true)}
                >
                  <Text>{material?.name ?? "Select a material"}</Text>
                </MeunSelectionInput>
                {error && (
                  <Text variant="error">{error.response?.data.message}</Text>
                )}
                {showMatList && data && (
                  <View style={{ height: 160 }}>
                    <MaterialList
                      style={{
                        elevation: 10,
                      }}
                      data={data.data}
                      renderItem={({ item }: { item: any }) => (
                        <MenuItem
                          key={item.id}
                          onPress={() => {
                            setmaterial(item);
                            setshowMatList(false);
                          }}
                        >
                          <Text>{item.name}</Text>
                        </MenuItem>
                      )}
                      keyExtractor={(item: any) => item.id}
                    />
                  </View>
                )}
              </VStack>
            </VStack>
          </VStack>

          <Button
            buttonText={isLoading ? "Loading" : "recycle"}
            onPress={() => {
              console.log("Make a recycle request");
              onCreateOrder(material);
            }}
          />
        </VStack>
      </ModalContainer>
    </ReactNativeModal>
  );
};

const MakeOrderModel: React.FC<Props> = () => {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <MainIconContainer onPress={() => setshowModal(true)}>
        <RecycleIcon />
      </MainIconContainer>
      <View>
        <Modal showModal={showModal} setshowModal={setshowModal} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
    width: "100%",
  },
  buttonStyle: {
    height: 90,
    width: 90,
    backgroundColor: "#000",
    borderRadius: 100,
  },
});

export default MakeOrderModel;
