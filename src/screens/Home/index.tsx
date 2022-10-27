import React, { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, FlatList, Alert} from 'react-native'
import { Badge } from 'react-native-paper';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { Task } from '../../components/Task';
import iconAdd  from '../../assets/icons/plus.png';
import iconClipboard from '../../assets/icons/Clipboard.png'

export default function Home(){
  const [activefocus, setActiveFocus] = useState(false);

  function handleTaskAdd(){}
  function handleParticipantRemove(name: string){}

  return (
    <View style={styles.container}>
      <Header/>
      
      <View style={styles.form}>
        <TextInput
          style={activefocus ? styles.inputFocus : styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          returnKeyType="send"
          selectionColor="#5E60CE"
          onFocus={() => setActiveFocus(true)}
          //value={}
          //onChangeText={}
          //onSubmitEditing={}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
        >  
          <Image 
            source={iconAdd} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContent}>
        <View style={styles.infoCreate}>
          <Text style={styles.create}>Criadas</Text>
          <Badge size={30} style={styles.badge}>3</Badge>
        </View>
        
        <View style={styles.infoDone}>
          <Text style={styles.done}>Concluídas</Text>
          <Badge size={30} style={styles.badge}>3</Badge>
        </View> 
      </View>

      <View style={styles.line}></View>

      <FlatList
        data={[
          {key: 2, name: 'Ir para a cademia ir para a academia ir para a academia'},
          {key: 3, name: 'Ir para a cademia ir para a academia ir para a academia'}
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Task
            key={item.key}
            name={item.name}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.ListEmptyContent}>
           
            <Image source={iconClipboard}/>
            
            <Text style={styles.listEmptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
         
          </View>
        )}
      />
    </View>
  );
}