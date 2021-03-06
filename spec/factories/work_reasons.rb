FactoryGirl.define do
  factory :work_reason do
    title 'MyString'
    summary '<p>MyText</p>'
    colour { WorkReason::THEMES.sample }
    image { File.open(File.join(Rails.root, 'spec/support/images/landscape_image.jpg')) }
    display true
  end
end
