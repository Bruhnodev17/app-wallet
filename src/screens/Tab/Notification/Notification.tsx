import { FlatList } from 'react-native'
import React, {useState} from 'react'
import { ContentTop } from '@src/components/Notification/ContentTop'


import { Header } from "../../../components/Header"
import theme from '@src/styles/theme'
import { recents_notifications } from '@src/utils/recent-notifications'
import { new_notifications } from '@src/utils/new-notifications'
import { ArrowCircleUp } from 'phosphor-react-native'

import {
    Container, ContentHeader, ContentTopTitle, ContentBody, ContentBodyTitle, ContentFlat, DataNotification, DataNotificationText, NewNotificationFlat,
    TitleNotification, TitleNotificationText, DescriptionNotification, DescriptionNotificationText,
    IconNotification
} from './styles'


export const Notification = () => {
    return (
        <>
            <Header
                iconLeft
                typeNotification
                appName='Notificações' />
            <Container>

                <ContentHeader>
                    <ContentTopTitle>Novo</ContentTopTitle>
                    <FlatList
                        data={new_notifications}
                        renderItem={({ item }) => (
                           <ContentTop
                           datetime={item.datetime}
                           title={item.title}
                           type={item.type}
                           />
                        )}
                        showsVerticalScrollIndicator={false}
                    />

                </ContentHeader>

                <ContentBody>
                    <ContentBodyTitle>Recentes</ContentBodyTitle>
                    <FlatList
                        data={recents_notifications}
                        renderItem={({ item }) => (
                            <>
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
                                        <ArrowCircleUp size={32} weight='bold' color={theme.COLORS.GREEN1} />
                                    </IconNotification>
                                </ContentFlat>
                            </>

                        )}
                        contentContainerStyle={{
                            paddingBottom:22,
                        }}
                        showsVerticalScrollIndicator={false}
                        />
                </ContentBody>

            </Container>
        </>
    )
}

