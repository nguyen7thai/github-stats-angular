bucketUrl='s3://github-stats.quangthai.be'

s3cmd del $bucketUrl --recursive --force
s3cmd -P put --recursive build/* $bucketUrl
