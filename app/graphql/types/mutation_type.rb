module Types
  class MutationType < Types::BaseObject
    field :createBook, mutation: Mutations::CreateBook
  end
end
