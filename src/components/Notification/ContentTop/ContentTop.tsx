import { View, Text } from 'react-native'
import React, { useState } from 'react'
import theme from '@src/styles/theme'

import {
    ContentFlat, DataNotification, DataNotificationText, NewNotificationFlat,
    TitleNotification, TitleNotificationText, DescriptionNotification, DescriptionNotificationText,
    IconNotification
} from './styles'
import { ArrowCircleUp } from 'phosphor-react-native'
import { new_notifications } from '@src/utils/new-notifications'

interface IcContentTopProps {
    datetime: string;
    title: string;
    type: string;
}


export const ContentTop = (item: IcContentTopProps) => {

    const [isVerify, setIsVerify] = useState<boolean>(false)

    const handleVerify = () => {
        setIsVerify(!isVerify)
    }

    return (
        <ContentFlat>
            <NewNotificationFlat>

                <DataNotification>
                    <DataNotificationText>
                        {item.datetime}
                    </DataNotificationText>
                </DataNotification>

                <TitleNotification>
                    <TitleNotificationText>
                        {item.title}
                    </TitleNotificationText>
                </TitleNotification>

                <DescriptionNotification>
                    <DescriptionNotificationText>
                        {item.type}
                    </DescriptionNotificationText>
                </DescriptionNotification>

            </NewNotificationFlat>

            {isVerify ? (
                <IconNotification onPress={handleVerify}>
                    <ArrowCircleUp size={32} weight='bold' color=
                        {theme.COLORS.GREEN1} />
                </IconNotification>
            ) : (
                <IconNotification onPress={handleVerify}>
                    <ArrowCircleUp size={32} weight='bold' color=
                        {theme.COLORS.RED} />
                </IconNotification>
            )}
        </ContentFlat>
    )
}

