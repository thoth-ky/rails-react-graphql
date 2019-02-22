module Types
  class BookType < Types::BaseObject
    graphql_name 'BookType'
  	field :id, ID, null: false
    field :title, String, null: false
    field :author, String, null: true
    field :review, String, null: true
    field :reviewer, String, null: true
  end
end
