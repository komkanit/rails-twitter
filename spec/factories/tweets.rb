FactoryGirl.define do
  factory :tweet do
    text { Faker::Hipster.sentence }
  end
end
