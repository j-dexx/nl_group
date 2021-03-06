require "rails_helper"

RSpec.describe Report, type: :model do
  subject { Report.new }

  describe "#filename" do
    it "has no member profile" do
      expect(subject.filename).to eq("all-report-#{ I18n.l Date.today }.csv")
    end

    it "has a member profile" do
      allow(subject).to receive(:reports_about).and_return("joe-bloggs")
      expect(subject.filename).to eq("joe-bloggs-report-#{ I18n.l Date.today }.csv")
    end
  end
end