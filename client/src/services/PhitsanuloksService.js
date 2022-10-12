import Api from '@/services/Api'

export default {
    index() {
        return Api().get('phitsanuloks')
    },
    show(phitsanulokId){
        return Api().get('phitsanulok/'+phitsanulokId)
    },
    post(phitsanulok){
        return Api().post('phitsanulok', phitsanulok)
    },
    put(phitsanulok){
        return Api().put('phitsanulok/'+phitsanulok.id, phitsanulok)
    },
    delete(phitsanulok){
        return Api().delete('phitsanulok/'+phitsanulok.id, phitsanulok)
    },
}