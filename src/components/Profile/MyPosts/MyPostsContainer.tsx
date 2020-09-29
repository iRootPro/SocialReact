import {
    ActionType,
    postsType,
} from "../../../redux/store";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {storeStateType} from "../../../index";

export type PropsType = {
    state: postsType
    dispatch: (action: ActionType) => void
}

let mapStateToProps = (state:storeStateType ) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType)=> void) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer