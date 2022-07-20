const { GraphQLList, GraphQLID, GraphQLString } = require('graphql');
const { UserType, PostType } = require('./types');
const { User, Post } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in the database',
    resolve(parent, args) {
        return User.find()
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Query posts by id',
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent, args) {
        return Post.findById(args.id)
    }
}

module.exports = { users, posts } 