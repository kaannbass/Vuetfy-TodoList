import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from "localbase";

let db = new Localbase('db')
db.config.debug = false
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        search: null,
        appTitle: process.env.VUE_APP_TITLE,
        tasks: [
            /* {
                 id: 1,
                 title: 'Wake up',
                 done: false,
                 dueDate: '2022-05-23',
             },
             {
                 id: 2,
                 title: 'Get eat',
                 done: false,
                 dueDate: '2022-05-24',
             },
             {
                 id: 3,
                 title: 'Walk in to the street',
                 done: false,
                 dueDate: '2022-05-25',
             },
             {
                 id: 4,
                 title: 'Play game',
                 done: false,
                 dueDate: '2022-05-26',
             },
 */
        ],
        snackbar: {
            show: false,
            text: ''
        },
        sorting: false,
    },
    mutations: {
        setSearch(state, value) {
            state.search = value
        },
        addTask(state, newTask) {
            state.tasks.push(newTask)
        },
        doneTask(state, id) {
            let task = state.tasks.filter(task => task.id === id)[0]
            task.done = !task.done
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
        showSnackBar(state, text) {
            let timeout = 0;
            if (state.snackbar.show) {
                state.snackbar.show = false
                timeout = 300
            }
            setTimeout(() => {
                state.snackbar.show = true
                state.snackbar.text = text
            }, timeout)

        },
        falseSnackBar(state) {
            state.snackbar.show = false
        },
        updateTaskTitle(state, payload) {
            let task = state.tasks.filter(task => task.id === payload.id)[0]
            task.title = payload.title
        },
        updateDueDate(state, payload) {
            let task = state.tasks.filter(task => task.id === payload.id)[0]
            task.dueDate = payload.dueDate
        },
        setTask(state, tasks) {
            state.tasks = tasks
        },
        toggleSorting(state) {
            state.sorting = !state.sorting
        },

    },
    actions: {
        addTask({commit}, newTaskTitle) {
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false,
                dueDate: Date.now(),
            }
            db.collection('tasks').add(newTask).then(() => {
                commit('addTask', newTask)
                commit('showSnackBar', 'Task added!')
            })
        },
        doneTask({state, commit}, id) {
            let task = state.tasks.filter(task => task.id === id)[0]
            db.collection('tasks').doc({id: id}).update({
                done: !task.done
            }).then(() => {
                commit("doneTask", id)
            })
        },
        CloseSnack({commit}) {
            commit('falseSnackBar')
        },
        deleteTask({commit}, id) {
            db.collection('tasks').doc({id: id}).delete().then(() => {
                commit('deleteTask', id)
                commit('showSnackBar', 'Task delete!')
            })
        },
        setTask({commit}, tasks) {
            db.collection('tasks').set(tasks).then(() => {
                commit('setTask', tasks)
            })
        },
        updateTaskTitle({commit}, payload) {
            db.collection('tasks').doc({id: payload.id}).update({
                title: payload.title
            }).then(() => {
                commit('updateTaskTitle', payload)
                commit('showSnackBar', 'Tast updated!')
            })
        },
        updateDueDate({commit}, payload) {
            db.collection('tasks').doc({id: payload.id}).update({
                dueDate: payload.dueDate
            }).then(() => {
                commit('updateDueDate', payload)
                commit('showSnackBar', 'Date Update!')
            })
        },
        getTasks({commit}) {
            db.collection('tasks').get().then(tasks => {
                commit('setTask', tasks)
            })
        },
    },
    getters: {
        taskFiltered(state) {
            if (!state.search) {
                return state.tasks
            }
            return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
        },
    },
    modules: {},
})
