namespace :static_app do
  desc 'Deploy web static app'
  task :deploy do
    file_name = "build_#{Time.now.strftime("%d_%m_%Y_%H_%M_%S")}.tar.gz"
    file_path = "build_deploy/#{file_name}"
    system "tar zcvf #{file_path} build"
    target = fetch(:deploy_to)
    on roles(:app) do
      upload! file_path, "#{target}/release"
      within target do
        execute 'rm', '-r build'
        execute 'tar', "zxvf release/#{file_name}"
      end
    end
  end
end
