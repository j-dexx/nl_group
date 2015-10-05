class Contact
  include ActiveModel::Model
  attr_accessor :name, :email, :phone_number, :message

  validates :name, :message, :email, :phone_number, presence: true
end