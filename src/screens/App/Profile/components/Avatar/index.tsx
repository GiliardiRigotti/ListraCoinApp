import * as ImagePicker from 'expo-image-picker';
import { IconNames } from "../../../../../assets/icons";
import Icon from "../../../../../components/Icon";
import { useProfile } from "../../../../../contexts/profile";
import { ButtonCamera, ContainerAvatar, ContainerImage, ImagemAvatar, NameAvatar } from "./styles";
import { useState } from 'react';
import { IUser } from '../../../../../interfaces/user';

export function Avatar() {
    const { user, updateUser } = useProfile()
    const [image, setImage] = useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            const editUser: IUser = {
                ...user,
                avatar: result.assets[0].uri
            }
            updateUser(editUser)
        }
    };

    return (
        <ContainerAvatar>
            <ContainerImage>
                <ImagemAvatar
                    source={{ uri: user.avatar }}
                />
                <ButtonCamera
                    onPress={pickImage}
                >
                    <Icon iconName={IconNames.CAMERA_ICON} width={45} height={45} />
                </ButtonCamera>
            </ContainerImage>
            <NameAvatar>
                {user?.nome}
            </NameAvatar>
        </ContainerAvatar>
    )
}