import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Container, ContentTop, ContentTopTitle, ContentBody, ContentBodyTitle, NewFlatList, RecentFlatList, ContentFlat, DataNotification, DataNotificationText, NewNotificationFlat,
    TitleNotification, TitleNotificationText, DescriptionNotification, DescriptionNotificationText,
    IconNotification
} from './styles'

import { new_notifications } from '@src/utils/new-notifications'

import { Header } from "../../../components/Header"
import { ArrowCircleUp } from 'phosphor-react-native'
import theme from '@src/styles/theme'


export const Notification = () => {
    return (
        <>
            <Header
                iconLeft
                typeNotification
                appName='Notificações' />
            <Container>

                <ContentTop>
                    <ContentTopTitle>Novo</ContentTopTitle>
                    <FlatList
                        data={new_notifications}
                        renderItem={({ item }) => (
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

                                <IconNotification>
                                    <ArrowCircleUp size={32} weight='bold' color={theme.COLORS.GREEN1}/>
                                </IconNotification>


                            </ContentFlat>
                        )}
                        showsVerticalScrollIndicator={false}
                    />

                </ContentTop>

                <ContentBody>
                    <ContentBodyTitle>Recentes</ContentBodyTitle>
                    <RecentFlatList></RecentFlatList>
                </ContentBody>

            </Container>
        </>
    )
}

