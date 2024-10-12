<script setup lang="ts">

definePageMeta({
  layout: 'blank',
})

const router = useRouter()

function handleLogin() {
  router.push('/')
}
</script>

<template>
  <div class="flex items-center justify-center py-12">
    <Tabs default-value="account" class="w-[400px]">
      <TabsList class="grid grid-cols-2 w-full">
        <TabsTrigger value="account">
          登陆
        </TabsTrigger>
        <TabsTrigger value="password">
          注册
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>使用账号密码登陆！</CardTitle>
            <CardDescription>
              确保你已经注册了账号，没有注册请点击注册！
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="username">用户名</Label>
              <Input id="username" />
            </div>
            <div class="space-y-1">
              <Label for="password">密码</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter class="flex flex-col items-end justify-between">
            <div class="flex items-center justify-end space-x-2">
              <Switch id="airplane-mode" default-checked />
              <Label for="airplane-mode">保持登陆状态</Label>
            </div>
            <Button class="mt-4 w-full" @click="handleLogin">
              登陆
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>使用邀请码注册！</CardTitle>
            <CardDescription>
              如果你没有邀请码，请联系<span class="mx-2 text-violet">violet</span>获取邀请码！
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="invitecode">邀请码</Label>
              <Input id="invitecode" />
            </div>
            <div class="space-y-1">
              <Label for="username">用户名</Label>
              <Input id="username" />
            </div>
            <div class="space-y-1">
              <Label for="current">密码</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="duplicate">再次输入密码</Label>
              <Input id="duplicate" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full" @click="handleLogin">
              注册
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
