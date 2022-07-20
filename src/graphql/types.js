const { GraphQLObjectType, GraphQLInputObjectType, 
	GraphQLID, GraphQLString, GraphQLList, GraphQLInt, 
	GraphQLBoolean, GraphQLFloat } = require('graphql')


   
const { User, Post} = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString},
        posts: {
            type: GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userid: parent.id})
            }
        }
    })

});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: { type: GraphQLID },
        userID: { type: GraphQLInt},
        text: { type: GraphQLString}

    })
})

module.exports = {
    UserType,
    PostType
}
  