import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, FlatList, Alert} from 'react-native'
import { Badge } from 'react-native-paper';

import { styles } from './styles';
import { Header } from '../../components/Header';
import  {TaskInput}  from '../../components/TaskInput';
import { Task, TaskProps} from '../../components/Task';
import iconClipboard from '../../assets/icons/Clipboard.png'



export default function Home(){
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [finish, setFinish] = useState(0);

  function handleTaskAdd(newTaskName: string){
    const findTask = tasks.find( (task) => task.name === newTaskName);
    const data: TaskProps = {
      id: new Date().getTime(),
      name: newTaskName,
      done: false,
    };
    if(!findTask){
      setTasks(oldState => [...oldState, data])
      return;
    }
  }
  function handleTaskRemove(id: number){
    setTasks(prevState => prevState.filter( task => 
      task.id !== id));
  }

  function handleToggleTaskDone(id: number) {
    setTasks(prevState => prevState.map(task => {
      if(task.id === id){
        task.done = !task.done;
        setFinish(task.done ? finish + 1 : finish - 1);
      }
      return task;
    }));  
  }

  return (
    <View style={styles.container}>
      <Header />
      <TaskInput addTask={handleTaskAdd}/>
      <View style={styles.infoContent}>
        <View style={styles.infoCreate}>
          <Text style={styles.create}>Criadas</Text>
          <Badge size={30} style={styles.badge}>{tasks.length}</Badge>
        </View>
        
        <View style={styles.infoDone}>
          <Text style={styles.done}>Concluídas</Text>
          <Badge size={30} style={styles.badge}>
            {finish}
          </Badge>
        </View> 
      </View>

      <View style={styles.line}></View>

      <FlatList
        data={tasks}
        keyExtractor={item => Number(item.id)}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            toggleTaskDone={() => handleToggleTaskDone(item.id)}
            removeTask={() => handleTaskRemove(item.id)}
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